import Nav from './Nav'
import Picture from './Picture'
import Player from './Player'
export default class PodcastPlayer extends React.Component {
    render() {
        const { clip } = this.props;
        return (
            <div className='modal'>
                    <div className='clip'>
                    <Nav {...this.props}/>
                    <Picture clip={ clip }/>
                    <Player clip={ clip }/>
                    </div>
                    <style jsx>{`
                        .clip {
                        display: flex;
                        height: 100%;
                        flex-direction: column;
                        background: #8756ca;
                        color: white;
                        }
                        .modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 99999;
                        }
                    `}</style>
                </div>
        )
    }
}