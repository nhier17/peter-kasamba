import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";

export enum FormFieldType {
     INPUT = 'input',
     TEXTAREA = 'textarea',
}

interface CustomFormFieldProps {
    name: string;
    label: string;
    control: Control<any>;
    fieldType: FormFieldType;
    placeholder?: string;
    disabled?: boolean;
    options?: { value: string; label: string }[];
}


const RenderField = ({ field, props }: { field: any; props: CustomFormFieldProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <FormControl>
                    <Input 
                        {...field} 
                        placeholder={props.placeholder} 
                        disabled={props.disabled}
                        className="field-input"
                    />
                </FormControl>
            );
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea 
                        {...field} 
                        placeholder={props.placeholder} 
                        disabled={props.disabled}
                        className="field-textarea"
                    />
                </FormControl>
            );
        default:
            return null;
    }
}


export const CustomFormField = (props: CustomFormFieldProps) => {
    const { control, name, label } = props
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel className="field-label">{label}</FormLabel>}
                    <RenderField field={field} props={props} />
                    <FormMessage className="text-red-500" />
                </FormItem>
            )}
        />
    );
};