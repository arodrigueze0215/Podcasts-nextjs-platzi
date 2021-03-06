import { Link } from '../routes';
import slug from '../helpers/slug';
export default class Channel extends React.Component {
    render() {
        const { channel } = this.props;
        return(
            <div>
                <Link route="channel" params={{ slug: slug(channel.title), id:channel.id }} prefetch>
                    <a className="channel">
                        <img src={ channel.urls.logo_image.original } alt=""/>
                        <h2>{ channel.title }</h2>
                    </a>
                </Link>
                <style jsx>{`
                    .channel {
                        display: block;
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        margin-botton:0.5em;
                    }

                    a.channel {
                        display: block;
                        margin-bottom: 0.5em;
                        color: #333;
                        text-decoration: none;
                    }

                    .channel img {
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        width:100%;
                    }
                    h2 {
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
}