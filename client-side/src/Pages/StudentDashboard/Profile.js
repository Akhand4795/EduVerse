
import PersonIcon from '@mui/icons-material/Person';
import { Image } from '@chakra-ui/react'
const Profile = () => {
    return (<div className="Profile width">
        <div className='flex flex-col'>
            <div>
                <div className="flex flex-row pt-10 justify-around">

                    <div className='flex flex-col'>
                        <span className='text-2xl font-semibold'>
                            Welcome back,
                        </span>
                        <span>
                            @userName
                        </span>

                    </div>
                    <div style={{ position: 'relative', textAlign: 'center' }}>
                        <PersonIcon
                            style={{
                                position: 'absolute',
                                top: "75%",
                                left: '75%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                padding: '4px',
                            }}
                        />
                        <Image
                            borderRadius='full'
                            boxSize='100px'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                    </div>



                </div>
                <div className='border-b-2 mt-10 border-black w-3/4 self-center ml-[200px]'></div>
            </div>
        </div>
    </div>);
}

export default Profile;