import Header from './Header.jsx';
import Head from 'next/head';
export default class Layout extends React.Component {


    render() {
        const { children, title } = this.props;
        return(
            <div>
                <Head>
                    <title>{ title }</title>
                </Head>
                <Header title={ title }/>                
                { children }
                <style jsx global> {`
                    body {
                        margin: 0;
                        font-family: system-ui;
                        background: white;
                    }

                `}
                </style>
            </div>
            
        );
    } 
}