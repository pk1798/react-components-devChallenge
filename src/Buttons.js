import Button from "./Button";

const Buttons = () => {
    return ( 
        <div className="buttons">
          <h2>Buttons</h2>
            <div className="container">
              <Button  buttonStyle="font" variant="default" title='<button />'/>
              <Button  buttonStyle="font" variant="default" hover="hover" title='&:hover &:focus'/>
            </div>
            <div className="container">
             <Button  buttonStyle="font" variant="outline" title='<button variant="outline" />'/>
             <Button  buttonStyle="font" variant="outline" hover="hover" title='&:hover &:focus'/>
            </div>
            <div className="container">
                <Button buttonStyle="font" variant="text"  title='<button variant="text" />'/>
                <Button buttonStyle="font" variant="text" hover="hover"  title='&:hover &:focus'/>
            </div>
            <div className="container">
                <Button buttonStyle="font" variant="default" shadow="none" title="<Button disabledShadow/>"/>
            </div>
            <div className="container">
                <Button buttonStyle="font" variant="default" active="disabled" title="<Button disabled/>"/>
                <Button buttonStyle="font" variant="text" active="disabled" title="<Button disabled/>"/>

            </div>
        </div>
     );
}
 
export default Buttons;