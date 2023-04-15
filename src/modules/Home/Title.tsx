import { Input } from "@chakra-ui/react";
import { useState } from "react";

 
const Title = () => {
    const [title, setTitle] = useState("This is the title")
    return ( 
        <Input mb={4} fontSize={"2xl"} size={"xl"} variant={"unstyled"} fontWeight={"bold"} value={title} onChange={e => setTitle(e.target.value)} />
    );
}
 

export default Title;