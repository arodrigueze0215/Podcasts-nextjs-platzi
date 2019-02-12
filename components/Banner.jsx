export default class Banner extends React.Component {
    render() {
        const { channel } = this.props;
        return(
            <div>
                <div 
                    className="banner" 
                    style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }}
                />
                <h1>{channel.title}</h1> 
                <style jsx>{`
                    .banner {
                        width: 100%;
                        padding-bottom: 25%;
                        background-position: 50% 50%;
                        background-size: cover;
                        background-color: #aaa;
                    }
                    h1 {
                        font-weight: 600;
                        padding: 15px;
                    }

                `}
                </style>
            </div>
        );
    }
}