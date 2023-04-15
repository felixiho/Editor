import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Heading,
    Text,
    Box,
    Flex,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
} from '@chakra-ui/react'
import { ChangeEvent, useRef, useState } from 'react'

type AddVideoModalProps = {
    isOpen: boolean
    onClose: () => void
    handleVideoEmbed: (pic: any) => void
}

const AddVideoModal = ({ isOpen, onClose, handleVideoEmbed }: AddVideoModalProps) => {
    const [url, setUrl] = useState('')
    const [provider, setProvider] = useState('')

    const cancleModal = () => {
        setUrl('')
        setProvider('')
        onClose()
    }

    const handleSubmit = () => {
        handleVideoEmbed(url)
        cancleModal()
    }

    return (
        <Modal isOpen={isOpen} onClose={cancleModal} size="2xl">
            <ModalOverlay />
            <ModalContent mt={[0, 40]} >
                <ModalHeader color="#010E05" fontSize={"lg"}>Embed</ModalHeader>
                <ModalCloseButton />
                <ModalBody> 

                    <Flex direction={"column"} w="full">
                        <FormControl size="sm">
                            <FormLabel fontSize="xs">VIDEO PROVIDER</FormLabel>
                            <Select onChange={(e) => setProvider(e.target.value)} bg="#FAFAFA" size={"sm"}>
                                <option>Youtube</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize="xs">URL</FormLabel>
                            <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://youtube.com/" />
                        </FormControl>
                    </Flex> 
                </ModalBody>

                <ModalFooter justifyContent={"flex-start"}>
                    <Button bg="#0A7227" mr={2} colorScheme='#0A7227' onClick={handleSubmit}>
                        Embed
                    </Button>
                    <Button variant='ghost' onClick={cancleModal}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}


export default AddVideoModal;