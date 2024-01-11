import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';

interface Props {
  params: {
    id: number;
  };
}

export async function GET(
  request: NextRequest,
  {
    params: { id },
  }: {
    params: {
      id: string;
    };
  }
) {
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (!user)
    return NextResponse.json(
      { success: false, error: 'User not found!' },
      { status: 404 }
    );

  return NextResponse.json({
    success: true,
    user,
  });
}

export async function PUT(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found!' }, { status: 404 });

  const updateUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(updateUser);
}

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: 'User not found!' }, { status: 404 });

  await prisma.user.delete({ where: { id: parseInt(params.id) } });

  return NextResponse.json(user);
}
