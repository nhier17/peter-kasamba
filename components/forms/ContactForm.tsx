"use client";
 
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CustomFormField, FormFieldType } from "../CustomFormField";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { messageSchema } from "@/lib/utils";

export const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof messageSchema>>({
        resolver: zodResolver(messageSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof messageSchema>) => {
        setLoading(true);
        try {
            // Send the message to the server
            console.log(data);
            toast.success("Message sent successfully");
        } catch (error) {
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <CustomFormField
                    name="name"
                    label="Name"
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    placeholder="Enter your name"
                />
                <CustomFormField
                    name="email"
                    label="Email"
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    placeholder="Enter your email"
                />
                <CustomFormField
                    name="subject"
                    label="Subject"
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    placeholder="Enter your subject"
                />
                <CustomFormField
                    name="message"
                    label="Message"
                    control={form.control}
                    fieldType={FormFieldType.TEXTAREA}
                    placeholder="Enter your message"
                />
                <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        "Send Message"
                    )}
                </Button>
            </form>
        </Form>
    );
};