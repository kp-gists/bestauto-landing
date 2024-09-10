import { sendEmail } from '@/utils/mail';
import { NextRequest, NextResponse } from 'next/server';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom'; // Import jsdom to simulate the DOM environment

export async function POST(req: NextRequest) {
	const sender = {
		name: 'Bestauto',
		address: 'no-reply@bestauto.com',
	};

	const recipients = [
		{
			name: 'kol.paja',
			address: 'kol.paja@gmail.com',
		},
		{
			name: 'Chevi',
			address: 'xhevi2013@gmail.com',
		},
	];

	const body = await req.json();
	const window = new JSDOM('').window;
	const DOMPurify = createDOMPurify(window);
	const sanitizedMsg = DOMPurify.sanitize(body.message);

	try {
		const res = await sendEmail({
			message: sanitizedMsg,
			sender,
			recipients,
			subject: `${body.fullName} | ${body.email} | ${body.phoneNumber}`,
			title: `You got a message from ${body.fullName}: `,
			clientEmail: body.email,
		});
		return NextResponse.json({
			message: 'Email Sent successfully',
			response: res.accepted,
		});
	} catch (error) {
		console.log('🚀 ~ POST ~ error:', error);
		return NextResponse.json({
			msg: 'email sent error',
		});
	}
}
