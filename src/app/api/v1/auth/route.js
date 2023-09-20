import { NextResponse } from 'next/server';

export async function GET(request) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  });
  const product = await res.json();

  return NextResponse.json({ product });
}
