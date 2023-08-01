import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  // EXTRACTING 'ITEMS' from BODY
  const { items } = await req.json();
  try {
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      // SHIPPING RELATED
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: "Standard shipping rate",
            fixed_amount: {
              amount: 50 * 100,
              currency: "usd",
            },
          },
        },
      ],
      line_items: items.map((item: any) => {
        return {
          price_data: {
            currency: "usd",
            tax_behavior: "inclusive",
            product_data: {
              name: item.productTitle,
              // images: [item.image.data.atrributes.formats.thumbnail.url],
            },
            unit_amount: item.productPricePerUnit * 100,
          },
          quantity: item.quantity,
        };
      }),
      // success_url: `localhost:3000/success`,
      success_url: `http://localhost:3000/confirmation?session_id={CHECKOUT_SESSION_ID}&session_status=1`,
      cancel_url: `http://localhost:3000/cancelled`,
      // cancel_url: `${new Request.headers.origin()}/cancel`,
    });
    return NextResponse.json({ session });
    // res.status(200).json({ session });
  } catch (err) {
    console.log(err.message);

    // res.status(err.statusCode || 500).json(err.message);
  }
}
