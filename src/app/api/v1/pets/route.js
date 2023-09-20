import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import prisma from '@/../lib/prisma';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerId = searchParams.get('ownerId');

  if (!petName || !ownerId) throw new Error('Pet and owner names required');
  const rawResult = await prisma.pets.create({
    data: {
      name: petName,
      ownerId: Number(ownerId),
    },
  });

  const result = JSON.stringify(rawResult, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value
  );

  const json = await JSON.parse(result);

  return NextResponse.json(json, { status: 200 });
}
