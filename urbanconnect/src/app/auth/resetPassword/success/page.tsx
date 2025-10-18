"use client";

import React from "react";
import SuccessPage from "@/app/components/pages/SuccessPage";

export default function ResetPasswordSuccessPage() {
    return (
        <SuccessPage
            title="Password reset successful"
            message="You can now log in with your new password."
            buttonLabel="Go to Login"
            onButtonClick={() => window.location.assign("/login")}
        />
    );
}