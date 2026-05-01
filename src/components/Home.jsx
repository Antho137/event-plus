import Header from './Header';
import Footer from './Footer';
import event from '../assets/event.jpg';
import event01 from '../assets/event01.jpg';
import event03 from '../assets/event03.jpg';
import event07 from '../assets/event07.jpg';
import event05 from '../assets/event05.jpg';

const Home = () => {
    const handleButton = () => {
        alert('You are welcome!');
    };

    return (
        <div className="mb-10">
            <div className='text-center text-blue-900'>
                <Header />
            </div>
            <div className='relative mt-25 md:pt-2.5 pb-10 px-10 sm:px-15 md:px-20 lg:px-25'>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 my-10 pb-5">
                    <div className='text-center font-light'>
                        <p className='w-60 text-3xl mx-auto font-medium booking'>We make your event enjoyable</p>
                        <p className='w-60 mx-auto'>Therefore, we simplify the booking process to all your attendees.</p>
                        <button onClick={handleButton} className='w-28 bg-blue-600 text-white text-sm text-center pt-0.5 pb-1.5 mt-5 font-normal rounded-xl hover:bg-white hover:text-blue-600 hover:border-1 blue-600 cursor-pointer'>Let do it now</button>
                    </div>
                    <div>
                        <img src={event} alt="Event Image" className='rounded-lg shadow-lg' />
                    </div>
                </div>
                <div>
                    <p className='w-[100%] sm:w-[80%] bg-blue-900 p-4 text-white text-center text-xl mx-auto mb-10 font-normal rounded-md'>Every event looks different, so tell us what you would like to be and we will make it happen. The events we organize are:</p>
                    <div className='text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5'>
                        <div>
                            <h3 className='text-xl text-orange-800'>Meeting</h3>
                            <img src='/meeting.jpg' alt='Meeting image' className='my-1 mx-auto w-[60px] h-[50px]' />
                            <p className='text-sm'>Discuss business strategies</p>
                        </div>
                        <div>
                            <h3 className='text-xl text-orange-800'>Wedding</h3>
                            <img src='/wedding.jpg' alt='Wedding image' className='my-1 mx-auto w-[60px] h-[50px]' />
                            <p className='text-sm'>Celebrate union of two</p>
                        </div>
                        <div>
                            <h3 className='text-xl text-orange-800'>Seminar</h3>
                            <img src='/seminar.jpg' alt='Seminar image' className='my-1 mx-auto w-[60px] h-[50px]' />
                            <p className='text-sm'>Training sessions</p>
                        </div>
                        <div>
                            <h3 className='text-xl text-orange-800'>Workshop</h3>
                            <img src='/workshop.jpg' alt='Workshop image' className='my-1 mx-auto w-[60px] h-[50px]' />
                            <p className='text-sm'>Interactive activities</p>
                        </div>
                        <div>
                            <h3 className='text-xl text-orange-800'>Trade Show</h3>
                            <img src='/trade.jpg' alt='Trade show image' className='my-1 mx-auto w-[60px] h-[50px]' />
                            <p className='text-sm'>Showcase new products</p>
                        </div>
                        <div>
                            <h3 className='text-xl text-orange-800'>Anniversary</h3>
                            <img src='/anniversary.jpg' alt='Anniversary image' className='my-1 mx-auto w-[60px] h-[50px]' />
                            <p className='text-sm'>Celebrate achievements</p>
                        </div>
                        <div>
                            <h3 className='text-xl text-orange-800'>Fashion Show</h3>
                            <img src='/fashion.jpg' alt='Fashion show image' className='my-1 mx-auto w-[60px] h-[50px]' />
                            <p className='text-sm'>Showcase new collections</p>
                        </div>
                        <div>
                            <h3 className='text-xl text-orange-800'>Conference</h3>
                            <img src='/conference.jpg' alt='Conference image' className='my-1 mx-auto w-[60px] h-[50px]' />
                            <p className='text-sm'>Networking opportunities</p>
                        </div>
                        <div className='hidden lg:block'>
                            <h3 className='text-xl text-orange-800'>Festival</h3>
                            <img src='/festival.jpg' alt='Festival image' className='my-1 mx-auto w-[60px] h-[50px]' />
                            <p className='text-sm'>Sharing cultural experiences</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-7 my-10 py-5">
                    <div>
                        <img src={event01} alt='Event' className='rounded-md' />
                    </div>
                    <div>
                        <img src={event03} alt='Event' className='rounded-md' />
                    </div>
                    <div>
                        <img src={event07} alt='Event' className='rounded-md' />
                    </div>
                    <div>
                        <img src={event05} alt='Event' className='rounded-md' />
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl text-orange-800'>Testimonials</h3>
                    <p>What our customers say about us!</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-7 py-5">
                        <p className='bg-white text-sm p-3 rounded-sm'>We had a great time and it was a perfect way to get together and have some fun. Thank you for the outstanding work.
                        <span className='block text-blue-900 py-1'>* Anzosa Corp. - CEO *</span></p>
                        <p className='bg-white text-sm p-3 rounded-sm'>I can’t say enough great things about Event Plus, and I look forward to working with you on future outings!
                        <span className='block text-blue-900 py-1'>* Inn - Projects Manager *</span></p>
                        <p className='bg-white text-sm p-3 rounded-sm'>You totally delivered and did a great job, not just with planning but with the enthusiasm and energy. Thank you again!
                        <span className='block text-blue-900 py-1'>* FitIn - Lead Manager *</span></p>
                        <p className='bg-white text-sm p-3 rounded-sm'>Congratulations on a fantastic job and I look forward to working with you in the future. We had a wonderful time.
                        <span className='block text-blue-900 py-1'>* Well Round Teams *</span></p>
                        <p className='bg-white text-sm p-3 rounded-sm'>We truly appreciate everything and hope we can do more in the future. Our symposium was a huge success. Thanks you!
                        <span className='block text-blue-900 py-1'>* Gofar Corp. - President *</span></p>
                        <p className='bg-white text-sm p-3 rounded-sm'>The event was great! Our employees really enjoyed their time. Thank you again for sharing your talents with our team!
                        <span className='block text-blue-900 py-1'>* Good Round - CLO *</span></p>
                        <p className='bg-white text-sm p-3 rounded-sm'>Our program of events would never get off the ground without your enthusiastic advice, help, and support.
                        <span className='block text-blue-900 py-1'>* follow Tech - CIO *</span></p>
                        <p className='bg-white text-sm p-3 rounded-sm'>We had a wonderful time and could not imagine pulling off our meeting without the guidance of your staff.
                        <span className='block text-blue-900 py-1'>* Corpus Inc. - Director *</span></p>
                    </div>
                </div>
            </div>
            <div className='text-center text-blue-900'>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
