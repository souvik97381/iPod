import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Home extends React.Component {


    render() {
        return (
            <div style={styles.homeScreen} id='home-screen'>
                <div style={styles.menuList} id='menu-list'>
                    <div style={styles.titleBar}>
                        <p style={styles.title}>iPod</p>
                    </div>
                    <ListGroup style={{ borderRadius: '0' }}>
                        <ListGroup.Item style={{ border: '0', padding: '0.2rem 0.6rem' }} className={this.props.activeItem === 'NowPlaying' ? 'active' : ''}>
                            Now Playing {this.props.activeItem === 'NowPlaying' ? <span style={{ float: 'right', fontWeight: 'bold' }}>&gt;</span> : ''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ border: '0', padding: '0.2rem 0.6rem' }} className={this.props.activeItem === 'Music' ? 'active' : ''}>
                            Music {this.props.activeItem === 'Music' ? <span style={{ float: 'right', fontWeight: 'bold' }}>&gt;</span> : ''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ border: '0', padding: '0.2rem 0.6rem' }} className={this.props.activeItem === 'Games' ? 'active' : ''}>
                            Games {this.props.activeItem === 'Games' ? <span style={{ float: 'right', fontWeight: 'bold' }}>&gt;</span> : ''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ border: '0', padding: '0.2rem 0.6rem' }} className={this.props.activeItem === 'Settings' ? 'active' : ''}>
                            Settings {this.props.activeItem === 'Settings' ? <span style={{ float: 'right', fontWeight: 'bold' }}>&gt;</span> : ''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer} id='image-container'>
                </div>
            </div>
        );
    }

}

const styles = {
    title: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    homeScreen: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirecton: 'row'
    },
    menuList: {
        //border:'1px solid black',
        height: '100%',
        width: '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex: '1'
    },
    imageContainer: {
        //border:'1px solid black',
        height: '100%',
        width: '50%',
        backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/860/881/255/amoled-dragon-phone-iphone-vertical-hd-wallpaper-preview.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0 12px 12px 0'
    },
    titleBar: {
        height: '10%',
        width: '100%',
        borderRadius: '12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding: '1px 5px 10px 8px',
        display: 'flex',
        flexDirecton: 'row',
        justifyContent: 'space-between'

    }
}

export default Home;