import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Input,
    FormControl,
    FormLabel,
    Select,
    Switch,
} from '@chakra-ui/react'
import {  useState } from 'react'

type AddVideoModalProps = {
    isOpen: boolean
    onClose: () => void
    handleSocialEmbed: (pic: any) => void
}

const AddSocialModal = ({ isOpen, onClose, handleSocialEmbed }: AddVideoModalProps) => {
    const [url, setUrl] = useState('')
    const [provider, setProvider] = useState('')

    const cancleModal = () => {
        setUrl('')
        setProvider('')
        onClose()
    }

    const handleSubmit = () => {
        handleSocialEmbed(url)
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
                            <FormLabel fontSize="xs">SOCIAL MEDIA PLATFORM</FormLabel>
                            <Select onChange={(e) => setProvider(e.target.value)} bg="#FAFAFA" size={"sm"}>
                                <option>Facebook</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize="xs">URL</FormLabel>
                            <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://jungle/post/Earn-passive" />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize="xs">CODE</FormLabel>
                            <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="<iframe....>" />
                        </FormControl>

                        <FormControl mt={4} display={"flex"} width={"full"} justifyContent={"space-between"} >
                            <FormLabel fontSize="xs">Disable Caption</FormLabel>
                            <Switch id='isChecked'  colorScheme='green' />
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


export default AddSocialModal;