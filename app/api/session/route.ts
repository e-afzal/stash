import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//? Retrieve SESSION and LINE ITEMS
export async function POST(req: NextRequest, res: NextResponse) {
  // EXTRACTING 'ITEMS' from BODY
  const { sessionId } = await req.json();
  try {
    // Retrieve SESSION
    const session = await stripe.checkout.sessions.retrieve(`${sessionId}`);
    // Retrieve Line Items from that session
    const lineItems = await stripe.checkout.sessions.listLineItems(
      `${sessionId}`
    );

    const session_details = {
      amount_details: {
        amount_subtotal: session.amount_subtotal,
        amount_total: session.amount_total,
        shipping_cost: session.shipping_cost.amount_total,
      },
      customer_details: session.customer_details,
      lineItems: lineItems.data,
    };

    return NextResponse.json({ session_details });
  } catch (err) {
    console.log(err.message);

    // res.status(err.statusCode || 500).json(err.message);
  }
}
