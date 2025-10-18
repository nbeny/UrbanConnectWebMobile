"use client";

import React from "react";
import SuccessPage from "@/app/components/pages/SuccessPage";

export default function RegisterSuccessPage() {
    return (
        <SuccessPage
            title="Account created!"
            message="Your UrbanConnect account has been successfully created."
            buttonLabel="Resent email verification"
            onButtonClick={() => window.location.assign("/verify-email")}
        />
    );
}