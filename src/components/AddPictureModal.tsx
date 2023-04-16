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
    Flex, 
    Image
} from '@chakra-ui/react'
import { ChangeEvent, useRef, useState } from 'react'

type AddPictureModalProps = {
    isOpen: boolean
    onClose: () => void
    handleImageEmbed: (pic: any) => void
}

const AddPictureModal = ({ isOpen, onClose, handleImageEmbed }: AddPictureModalProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [picture, setPicture] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    const cancleModal = () => {
        setPicture(null)
        onClose()
    }
    const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            const _file = files[0]
            setPicture(_file)
        }
    }


    const handleSubmit = () => {
        if (!picture) return
        setLoading(true)
        const formData = new FormData()
        formData.append("file", picture)
        formData.append("upload_preset", 'wazobia')
        const options = {
            method: 'POST',
            body: formData
        }
        fetch('https://api.Cloudinary.com/v1_1/felixiho/image/upload', options)
            .then(res => res.json())
            .then(res => {
                handleImageEmbed(res.secure_url)
                setPicture(null)
                onClose()
                setLoading(false)
            })
            .catch(err => alert(err));


    }

    return (
        <Modal isOpen={isOpen} onClose={cancleModal} size="2xl">
            <ModalOverlay />
            <ModalContent mt={[0, 40]} >
                <ModalHeader color="#010E05" fontSize={"lg"}>Embed</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                    <Heading mb={6} fontSize={"md"} fontWeight={"medium"} color="#343E37">Upload Image</Heading>

                    <Text color="#333333" fontSize={"xs"}>FILE UPLOAD</Text>


                    <Flex width="full" justifyContent={"center"} border=" 1px dashed #0A7227" mx="auto" borderRadius={"4px"} bg="#FAFAFA" padding={12} mt={3}>
                        {
                            picture ? <Image src={URL.createObjectURL(picture)} alt="uploaded picture" />
                                :
                                <>
                                    <input
                                        onChange={(e) => handleImageSelect(e)} type="file" ref={inputRef} style={{ display: 'none' }} />
                                    <Button
                                        onClick={() => inputRef.current?.click()} border="1px solid #6CAA7D" bg="white" fontSize={"sm"}>Import Image from Device</Button>


                                </>
                        }</Flex>
                </ModalBody>

                <ModalFooter justifyContent={"flex-start"}>
                    <Button isLoading={loading} bg="#0A7227" mr={2} colorScheme='#0A7227' onClick={handleSubmit}>
                        Embed
                    </Button>
                    <Button variant='ghost' onClick={cancleModal}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}


export default AddPictureModal;