import {
    Box, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, 
    Text,
    MenuDivider, 
    Button
} from '@chakra-ui/react'; 
import { IconContext, } from "react-icons";
import { TbCrossFilled } from 'react-icons/tb';
import { BsImage, BsCameraVideoFill, BsStars } from 'react-icons/bs';



type AttachmentMenuProps = {
    setShowPictureModal: (a: boolean) => void
    setShowVideoModal: (a: boolean) => void
    setShowSocialModal: (a: boolean) => void
}

const AttachmentMenu = ({
    setShowPictureModal,
    setShowVideoModal,
    setShowSocialModal
}: AttachmentMenuProps) => {
    return (
        <Box as="section" w="100%">
            <Menu>
                <MenuButton as={Button} rounded={"full"} _active={{ bg: "#E7F1E9" }} _hover={{ bg: '#CEE3D4' }} minW={"32px"} bg="#E7F1E9" height={"32px"} width="32px" margin={"auto"} >
                    <IconContext.Provider value={{ size: "11px", style: { margin: '-5px' } }}>
                        <TbCrossFilled />
                    </IconContext.Provider>
                </MenuButton>
                <MenuList _active={{ bg: "#F7FCF8" }} width={["200px", "300px"]} maxW={"300px"}>
                    <Text fontSize={"xs"} px={3}>EMBEDS</Text>
                    <MenuDivider />

                    <MenuItem minH='48px' _hover={{ bg: "#F7FCF8" }} _active={{ bg: "#F7FCF8" }} onClick={() => setShowPictureModal(true)} >
                        <Flex direction={"row"} my="auto">
                            <IconContext.Provider value={{ size: "20px", style: { margin: 'auto' } }}>
                                <BsImage />
                            </IconContext.Provider>
                            <Box px={4}>
                                <Text fontSize={"sm"}>Picture</Text>
                                <Text fontSize="2xs">jpeg, png</Text>
                            </Box>
                        </Flex>
                    </MenuItem>

                    <MenuItem minH='48px' _hover={{ bg: "#F7FCF8" }} _active={{ bg: "#F7FCF8" }} onClick={() => setShowVideoModal(true)}  >
                        <Flex direction={"row"} my="auto">
                            <IconContext.Provider value={{ size: "20px", style: { margin: 'auto' } }}>
                                <BsCameraVideoFill />
                            </IconContext.Provider>
                            <Box px={4}>
                                <Text fontSize={"sm"}>Video</Text>
                                <Text fontSize="2xs">JW player, Youtube, Vimeo</Text>
                            </Box>
                        </Flex>
                    </MenuItem>

                    <MenuItem minH='48px' _hover={{ bg: "#F7FCF8" }} _active={{ bg: "#F7FCF8" }} onClick={() => setShowSocialModal(true)}  >
                        <Flex direction={"row"} my="auto">
                            <IconContext.Provider value={{ size: "20px", style: { margin: 'auto' } }}>
                                <BsStars />
                            </IconContext.Provider>
                            <Box px={4}>
                                <Text fontSize={"sm"}>Social</Text>
                                <Text fontSize="2xs">Instagram, Twitter, Tiktok, Snapchat, Facebook</Text>
                            </Box>
                        </Flex>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
}

export default AttachmentMenu;