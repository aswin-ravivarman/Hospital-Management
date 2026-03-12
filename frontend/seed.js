require("dotenv").config();
const axios = require("axios");

const API_URL = process.env.API_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ADMIN_NAME = process.env.ADMIN_NAME;
const ADMIN_PHONE = process.env.ADMIN_PHONE;

async function seed() {

    let token = null;

    try {
        console.log("Registering admin...");

        await axios.post(`${API_URL}/api/auth/signup`, {
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD,
            role: "admin",
            fullName: ADMIN_NAME,
            phone: ADMIN_PHONE
        });

        console.log("Admin registered successfully!");

    } catch (e) {

        if (
            e.response &&
            e.response.data &&
            JSON.stringify(e.response.data).includes("Email is already in use")
        ) {
            console.log("Admin already exists. Proceeding to login...");
        } else {
            console.error(
                "Signup error:",
                e.response ? e.response.data : e.message
            );
            return;
        }
    }

    try {

        const loginRes = await axios.post(`${API_URL}/api/auth/signin`, {
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD
        });

        token = loginRes.data.token;

        console.log("Admin logged in!");

    } catch (e) {

        console.error(
            "Login Error:",
            e.response ? e.response.data : e.message
        );
        return;
    }

    const departments = [
        { name: "Cardiology", description: "Heart and cardiovascular system" },
        { name: "Neurology", description: "Brain and nervous system" },
        { name: "Orthopedics", description: "Bones, joints, ligaments, tendons, and muscles" },
        { name: "Pediatrics", description: "Medical care of infants, children, and adolescents" },
        { name: "Dermatology", description: "Skin, hair and nails" }
    ];

    for (const dept of departments) {

        console.log(`Adding ${dept.name}...`);

        try {

            await axios.post(
                `${API_URL}/api/departments`,
                dept,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log(`${dept.name} added`);

        } catch (err) {

            if (err.response && err.response.status !== 500) {
                console.log(`${dept.name} skipped (may already exist)`);
            } else {
                console.error(`Failed to add ${dept.name}:`, err.message);
            }
        }
    }

    console.log("Departments seeded successfully!");
}

seed();