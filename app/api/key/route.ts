import { NextResponse } from 'next/server';
import { generateSecret } from '@/lib/common';

export async function GET() {
  const secret = generateSecret();

  return NextResponse.json({
    secret,
    timestamp: new Date().toISOString()
  });
}
