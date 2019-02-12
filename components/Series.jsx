import ChannelGrid from './ChannelGrid.jsx';
export default class Series extends React.Component {
    render() {
        const { series } = this.props;
        return(
            <div>
                <h2>Series</h2>
                <ChannelGrid channels={ series }/>
                <style jsx>{`
                    h2 {
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
                    }
                `}
                </style>
            </div>
        )
    }
}