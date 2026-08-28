import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      companyName,
      contactPerson,
      email,
      phone,
      website,
      category,
      message,
    } = body;

    // Validate required fields
    if (!companyName || !contactPerson || !email || !phone || !category) {
      return Response.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email sent to Evolve / VIDHYUT team
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_ID,

      subject: `New VIDHYUT Sponsorship Inquiry - ${companyName}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 700px;
          margin: auto;
          padding: 30px;
          background: #f7f7f7;
        ">

          <div style="
            background: #050505;
            color: white;
            padding: 25px;
            border-radius: 12px 12px 0 0;
          ">
            <h1 style="margin: 0;">
              New Sponsorship Inquiry
            </h1>

            <p style="color: #9FE870;">
              VIDHYUT 2026
            </p>
          </div>

          <div style="
            background: white;
            padding: 30px;
            border-radius: 0 0 12px 12px;
          ">

            <h2>Company Details</h2>

            <p>
              <strong>Company Name:</strong>
              ${companyName}
            </p>

            <p>
              <strong>Contact Person:</strong>
              ${contactPerson}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone}
            </p>

            <p>
              <strong>Website:</strong>
              ${website || "Not provided"}
            </p>

            <p>
              <strong>Partnership Category:</strong>
              ${category}
            </p>

            <hr />

            <h2>Message</h2>

            <p>
              ${message || "No message provided."}
            </p>

          </div>

        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      {
        success: true,
        message: "Sponsorship inquiry sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("SPONSORSHIP API ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send sponsorship inquiry.",
      },
      {
        status: 500,
      }
    );
  }
}