import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validationResult = userSchema.safeParse(body);
  if (!validationResult.success) {
    return NextResponse.json(
      {
        success: false,
        statusCode: 400,
        errors: validationResult.error.errors,
      },
      { status: 400 }
    );
  }

  const user = await prisma?.user.findUnique({ where: { email: body.email } });

  if (user)
    return NextResponse.json(
      {
        success: false,
        statusCode: 400,
        error: 'User already exists with this email!',
      },
      { status: 400 }
    );

  const hashedPassword = await bcrypt.hash(body.password!, 10);
  const newUser = await prisma?.user.create({
    data: { email: body.email, password: hashedPassword },
  });

  return NextResponse.json(
    { success: true, statusCode: 201, data: { email: body.email } },
    { status: 201 }
  );
}
