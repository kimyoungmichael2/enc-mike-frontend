import React, { Component } from 'react'
import { Segment, Header, Image} from 'semantic-ui-react'
import notfastnotfurious from './notfastnotfurious.png';

class Title extends Component {
    render() {
        return (
            <div>
                <Segment padded>
                    <Header as='h2' style={{fontSize: "3em"}}>
                    <Image circular src={notfastnotfurious} /> Say Something Nice to Michael!
                    </Header>
                    <p><b>HELLO!</b> Michael made this quick app as a project to learn basics of web development. 
                        <br></br>
                        Some of you may know, but Michael actually quit his current job at the end of 2020 to devote to full-time study and portfolio development to transition into a career in Computer Science!
                        <br></br>
                        It's going to be mostly self-study with some coaching from of his freinds who are currently in the industry. 
                        <br></br>
                        This means Michael needs lots of encouragement and prayer. If you want to help him out, please say something nice here to encourage him and keep him in yo prayers.
                        <br></br>
                        Thanks!
                        <br></br>
                        (FYI: I didn't add any function to edit or delete what you write. Please keep that in mind before you submit your messages lol)
                    </p>
                </Segment>
            </div>
        )
    }
}

export default Title