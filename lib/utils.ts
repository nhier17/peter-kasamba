import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const messageSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long").max(100, "Name must be at most 100 characters long"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(2, "Subject must be at least 2 characters long").max(100, "Subject must be at most 100 characters long"),
    message: z.string().min(10, "Message must be at least 10 characters long"),
});