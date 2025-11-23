export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("ACCESS KEY IS MISSING!");
      return Response.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    const dataToSend = {
      name: body.name,
      email: body.email,
      message: body.message,
      access_key: accessKey,
      from_name: body.name,
      subject: `New Contact Form Submission from ${body.name}`,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Next.js Contact Form", // Add user agent
      },
      body: JSON.stringify(dataToSend),
    });

    const responseText = await res.text();

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse response");
      return Response.json(
        {
          success: false,
          message:
            "Service temporarily unavailable. Please try again or email us directly at icirhtrust@gmail.com",
        },
        { status: 500 }
      );
    }

    return Response.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      {
        success: false,
        message: "Server error. Please email us at icirhtrust@gmail.com",
      },
      { status: 500 }
    );
  }
}
