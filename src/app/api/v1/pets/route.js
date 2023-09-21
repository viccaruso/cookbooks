import { NextResponse } from 'next/server';
import cleanseBigInt from '~/utils/bigIntCleaner';
import prisma from '~/utils/prisma';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerId = searchParams.get('ownerId');

  if (!petName || !ownerId) throw new Error('Pet and owner names required');
  const result = await prisma.pets.create({
    data: {
      name: petName,
      ownerId: Number(ownerId),
    },
  });

  const json = await JSON.parse(cleanseBigInt(result));

  return NextResponse.json(json, { status: 200 });
}
