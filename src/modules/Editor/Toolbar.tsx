import { Box } from "@chakra-ui/react";


const Toolbar = () => {
    return (
        <div style={{ background: 'white', borderRadius: '5px', borderColor: "#E7F1E9;", }} id="toolbar" className="ql-custom-toolbar">
        <div className="ql-formats ql-custom-toolbar-child">
            <select className="ql-header  " defaultValue={""} onChange={e => e.persist()} >
                <option value="1" />
                <option value="2" />
                <option selected />
            </select>
            </div>
            <div className="ql-formats ql-custom-toolbar-child">
                <button className="ql-link ql-custom-toolbar-child" />
                <button className="ql-image ql-custom-toolbar-child" />
            </div>
            <div className="ql-formats ql-custom-toolbar-child" style={{ paddingRight: "10px" }}>
                <button className="ql-align" value={"right"} />
                <button className="ql-align" value={"justify"} />
                <button className="ql-align" value={undefined} />
            </div>
            <div className="ql-formats ql-custom-toolbar-child" style={{ paddingRight: "10px" }}>
                <button className="ql-bold" />
                <button className="ql-italic" />
            </div>
            <div className="ql-formats ql-custom-toolbar-child">
                <button className="ql-list" value="ordered"></button>
                <button className="ql-list" value="bullet"></button>
                <button className="ql-indent" value="-1"></button>
                <button className="ql-indent" value="+1"></button>
            </div>
        </div>
    );
}


export default Toolbar;