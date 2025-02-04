export interface DropdownOption {
    title: string;
    flag: string;
    language: string;
}

export interface DropdownProps {
    name: string;
    options: DropdownOption[];
}
