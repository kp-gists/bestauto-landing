import { sendEmail } from '@/utils/mail';
import { NextRequest, NextResponse } from 'next/server';

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
  console.log('🚀 ~ POST ~ body:', body);

  try {
    const res = await sendEmail({
      message: body.message,
      sender,
      recipients,
      subject: body.subject,
      title: `Email from ${body.fullName}`,
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
