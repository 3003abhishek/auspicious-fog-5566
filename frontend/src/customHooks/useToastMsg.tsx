import { useToast } from '@chakra-ui/react';

export interface IToastMsg {
    title: string,
    desc?: string,
    status: 'error' | 'info' | 'warning' | 'success'
}

export type TToastMsg = (({ }: IToastMsg) => void)

const useToastMsg = () => {
    const toast = useToast();

    return ({ title, desc, status }: IToastMsg) => {
        toast({
            title,
            status,
            description: desc,
            duration: 5000,
            isClosable: true,
            position: 'top-right'
        })
    }
}

export default useToastMsg