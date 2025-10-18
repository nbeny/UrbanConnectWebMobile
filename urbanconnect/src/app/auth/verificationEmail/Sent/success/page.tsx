"use client";

import React from "react";
import SuccessPage from "@/app/components/pages/SuccessPage";

export default function VerificationEmailSentSuccessPage() {
    return (
        <SuccessPage
            title="Verification email sent"
            message="We’ve sent a link to your inbox. Please verify your email to continue."
            buttonLabel="Resend verification email"
            onButtonClick={() => window.location.assign("/auth/verificationEmail/Sent/success")}
        />
    );
}