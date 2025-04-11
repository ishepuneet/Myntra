import React from 'react';
import google from '../src/commonfile/img/play.png'
import apple from '../src/commonfile/img/store.png'
import twitter from '../src/commonfile/img/X.png'
import inst from '../src/commonfile/img/insta.png'
import you from '../src/commonfile/img/youtube.png'
import face from '../src/commonfile/img/facebook.png'
import ori from '../src/commonfile/img/original.png'
import ret from '../src/commonfile/img/14.png'


const Footer = () => {
    return (


        <div className='bg-[#FAFBFC] py-[30px] text-left'>

            <div className='container-[1100px] flex pl-[10%] mx-auto '>
                <div className='mr-[40px] '>
                    <h6 className='text-[12px] font-[700] mb-[20px] cursor-pointer text-[#282C3F] '>ONLINE SHOPPING</h6>
                    <ul>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Men</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Women</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Kids</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Home & Living</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Beauty</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Gift Cards</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Myntra Insider</li>
                    </ul>

                    {/* ////////////////////////////////////////// */}

                    <h6 className='text-[12px] font-[700] my-[15px] cursor-pointer '>USEFUL LINKS</h6>
                    <ul>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Blog</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Careers</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Site Map</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Corparate Infomation</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Whitehat </li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Cleartrip</li>
                    </ul>

                </div>

                {/* //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

                <div className='mr-[40px] '>
                    <h6 className='text-[12px] font-[700] mb-[15px] cursor-pointer text-[#282C3F] '>COSTOMER POLICIES</h6>
                    <ul>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Contact Us</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>F & Q</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>T & C</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Terms Of Use</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Track Orders</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Shipping</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Cancellation</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Returns</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Privacy Policy</li>
                        <li className='text-[#696B79] cursor-pointer text-[15px] '>Grievance Officer</li>
                    </ul>
                </div>

                {/* //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

                <div className='mr-[40px] '>
                    <h6 className='text-[12px] font-[700] mb-[15px] text-[#282C3F] '>EXPERIENCE MYNTRA APP ON MOBILE</h6>

                    <div className='flex'>
                        <a href="https://play.google.com/store/apps/details?id=com.myntra.android"><img src={google} alt='' width={150} /></a>

                        <a href="https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059"><img src={apple} alt='' width={130} className='ml-[10px]' /></a>

                    </div>
                    <h6 className='mt-[20px] text-[12px] font-[700] '>KEEP IN TOUCH</h6>

                    <div className='flex gap-[20px] mt-[15px] '>
                        <img src={face} alt="" width={20} className=' cursor-pointer' />
                        <img src={twitter} alt="" width={20} className=' cursor-pointer' />
                        <img src={you} alt="" width={20} className=' cursor-pointer' />
                        <img src={inst} alt="" width={20} className=' cursor-pointer' />

                    </div>
                </div>

                {/* //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

                <div className=' w-[300px]  '>
                    <div className="flex mb-[20px] ">
                        <img src={ori} alt="" width={55} />
                        <h2 className='text-[#696B79] text-[16px] ml-[15px] '><span className='font-bold text-[#282C3F] '>100% ORIGINAL</span>guarantee for all products at myntra.com</h2>
                    </div>

                    <div className="flex">
                        <img src={ret} alt="" width={55} />
                        <h2 className='text-[#696B79] text-[16px] ml-[15px] '><span className='font-bold text-[#282C3F] '>Return within 14days</span> of receiving your order</h2>
                    </div>
                </div>

            </div>

            <div className='container-[1100px] mx-auto pl-[10%] mt-[20px] '>
                <h6 className='text-[12px] font-[700] mb-[15px] text-[#282C3F] '>POPULAR SEARCHES </h6>
                {/* <hr/> */}
                <p className='cursor-pointer text-[#696B79] leading-[30px] '>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma| Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21  Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees</p>
            </div>

            <div className='flex mx-auto container justify-between my-[40px] pl-[7%] '>
                <h2 className='text-[#94969F] '>In case of any concern, <span className='text-[#526CD0] font-bold cursor-pointer '>Contact Us</span></h2>
                <h2 className='text-[#94969F] '>© 2024 www.myntra.com. All rights reserved.</h2>
                <h2 className='text-[#94969F] cursor-pointer '>A Flipkart company</h2>
            </div>
            <span className='container mx-auto text-[black]  '><hr /></span>

            <div className="container mt-[20px] mx-auto pl-[7%] flex ">
                <div className="">
                    <h6 className='font-bold text-[15px] text-[#282C3F] mb-[20px] '>Registered Office Address</h6>
                    <ul className='text-[#94969F] text-[15px] '>
                        <li>Buildings Alyssa,</li>
                        <li>Begonia and Clover situated in Embassy Tech Village,</li>
                        <li>Outer Ring Road,</li>
                        <li>Devarabeesanahalli Village,</li>
                        <li>Varthur Hobli,</li>
                        <li>Bengaluru – 560103, India</li>
                    </ul>
                </div>
                <div className="text-[#94969F] text-[15px] mt-[11%] ml-[40%] mb-[20px] ">
                    <p>CIN: U72300KA2007PTC041799</p>
                    <p>Telephone:<span className='text-[#526CD0] font-[700] '> +91-80-61561999</span></p>
                </div>
            </div>

            <hr />

            <div className="container mx-auto mt-[30px] px-[80px] ">
                <h1 className='text-[#535766] text-[14px] font-[700] leading-[30px] '>ONLINE SHOPPING MADE EASY AT MYNTRA</h1>
                <p className=' text-[#94969F] text-[14px] '>If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.</p>

                {/* /////////////////////////////////////////////////////////// */}

                <h1 className='text-[#535766] text-[14px] font-[700] leading-[30px] mt-[30px] '>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h1>
                <p className=' text-[#94969F] text-[14px] '>Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>

                {/* /////////////////////////////////////////////////////////// */}

                <div className="mt-[20px] pl-[30px] ">
                    <p className='text-[#94969F] text-[14px] mb-[20px] '>1. <span className='text-[#535766] font-[700] '>Smart men’s clothing</span> - At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.</p>


                    <p className='text-[#94969F] text-[14px] mb-[20px] '>2. <span className='text-[#535766] font-[700] '>Trendy women’s clothing</span> - Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.</p>


                    <p className='text-[#94969F] text-[14px] mb-[20px] '>3. <span className='text-[#535766] font-[700] '>Fashionable footwear</span> - While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</p>


                    <p className='text-[#94969F] text-[14px] mb-[20px] '>4. <span className='text-[#535766] font-[700] '>Stylish accessories</span> - Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.</p>


                    <p className='text-[#94969F] text-[14px] mb-[20px] '>5. <span className='text-[#535766] font-[700] '>Fun and frolic</span> - Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cheris</p>


                    <p className='text-[#94969F] text-[14px] '>6. <span className='text-[#535766] font-[700] '>Beauty begins here</span> - You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.</p>

                </div>

                {/* /////////////////////////////////////////////////////////// */}

                <p className=' text-[#94969F] text-[14px] mt-[20px]'>Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.</p>

                {/* /////////////////////////////////////////////////////////// */}

                <h2 className='text-[#535766] text-[14px] font-[700] mt-[30px] '>AFFORDABLE FASHION AT YOUR FINGERTIPS</h2>
                <p className='text-[#94969F] text-[14px] '>Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets affordable.</p>

                {/* /////////////////////////////////////////////////////////// */}

                <h2 className='text-[#535766] text-[14px] font-[700] mt-[30px] '>MYNTRA INSIDER</h2>
                <p className='text-[#94969F] text-[14px] '>Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.</p>

                {/* /////////////////////////////////////////////////////////// */}

                <p className='text-[#94969F] text-[14px] my-[20px] '>There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.</p>

                {/* /////////////////////////////////////////////////////////// */}

                <h6 className='text-[#535766] text-[14px] font-[700] mb-[10px] '>Insider</h6>
                <ul className='pl-[40px] leading-[30px] '>
                    <li className='text-[#94969F] text-[14px] list-disc '>Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions</li>
                    <li className='text-[#94969F] text-[14px] list-disc '>Curated collections from celeb stylists.</li>
                </ul>

                {/* /////////////////////////////////////////////////////////// */}

                <h6 className='text-[#535766] text-[14px] font-[700] mb-[10px] '>Elite</h6>
                <ul className='pl-[40px] leading-[30px] '>
                    <li className='text-[#94969F] text-[14px] list-disc '>VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</li>
                    <li className='text-[#94969F] text-[14px] list-disc '>Exclusive early access to Limited Edition products</li>
                </ul>

                {/* /////////////////////////////////////////////////////////// */}

                <h6 className='text-[#535766] text-[14px] font-[700] mb-[10px] '>Icon</h6>
                <ul className='pl-[40px] leading-[30px] '>
                    <li className='text-[#94969F] text-[14px] list-disc '>Chance to get on guest lists for special events.</li>
                </ul>

                {/* /////////////////////////////////////////////////////////// */}

                <h2 className='text-[#535766] text-[14px] font-[700] mt-[30px] leading-[30px] '>Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</h2>
                <p className='text-[#94969F] text-[14px] mb-[20px] '>The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.</p>

                {/* /////////////////////////////////////////////////////////// */}

                <p className='text-[#94969F] text-[14px] mb-[10px] '>Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.</p>

                {/* /////////////////////////////////////////////////////////// */}

                <p className='text-[#94969F] text-[14px] mb-[10px] '>Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named theMyntra Studio, this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels</p>

                {/* /////////////////////////////////////////////////////////// */}

                <p className='text-[#94969F] text-[14px] mb-[10px] '>If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.</p>

                {/* /////////////////////////////////////////////////////////// */}

                <div className="pl-[30px]">
                    <div className="">
                        <h2 className='text-[#94969F] text-[14px] mb-[15px]'>1. <span className='text-[#535766] text-[14px] font-[700]'>Keep Up With What Your Favourite Fashion Icons Are Upto</span></h2>

                        <p className='text-[#94969F] text-[14px] mb-[10px] '>The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear.</p>

                        <p className='text-[#94969F] text-[14px]'>Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.</p>
                    </div>

                    {/* /////////////////////////////////////////////////////////// */}

                    <div className="mt-[15px]">
                        <h2 className='text-[#94969F] text-[14px] mb-[15px]'>2. <span className='text-[#535766] text-[14px] font-[700]'>Quick Fashion Tip And Tricks</span></h2>

                        <p className='text-[#94969F] text-[14px] mb-[10px] '>Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.</p>
                    </div>

                    {/* /////////////////////////////////////////////////////////// */}

                    <div className="">
                        <h2 className='text-[#94969F] text-[14px] mb-[15px]'>3. <span className='text-[#535766] text-[14px] font-[700]'>Updates on What Is Trending and New Product Launches</span></h2>

                        <p className='text-[#94969F] text-[14px] mb-[10px] '>Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.</p>

                        <p className='text-[#94969F] text-[14px] mb-[10px] '>Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections..</p>
                    </div>

                    {/* /////////////////////////////////////////////////////////// */}

                    <div className="">
                        <h2 className='text-[#94969F] text-[14px] mb-[15px]'>4. <span className='text-[#535766] text-[14px] font-[700]'>Explicit Step-By-Step Beauty Routines From Experts</span></h2>

                        <p className='text-[#94969F] text-[14px] mb-[10px] '>Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.</p>
                    </div>

                    {/* /////////////////////////////////////////////////////////// */}

                    <div className="">
                        <h2 className='text-[#94969F] text-[14px] mb-[15px]'>5. <span className='text-[#535766] text-[14px] font-[700]'>Celebrity Confessions And A Look Into Their Lives</span></h2>

                        <p className='text-[#94969F] text-[14px] mb-[10px] '>A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks</p>

                        <p className='text-[#94969F] text-[14px] mb-[10px] '>If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.</p>
                    </div>
                </div>

                {/* /////////////////////////////////////////////////////////// */}

                <div className="">
  
                    <div className="mt-[30px]">
                        <h2 className='text-[#535766] text-[14px] font-[700]'> <span>MYNTRA APP</span></h2>

                        <p className='text-[#94969F] text-[14px] mb-[20px] '>Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!.</p>
                    </div>

                    {/* /////////////////////////////////////////////////////////// */}

                    <div className="mt-[30px]">
                        <h2 className='text-[#535766] text-[14px] font-[700]'>HISTORY OF MYNTRA</h2>

                        <p className='text-[#94969F] text-[14px] mb-[20px] '>Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.</p>

                        <p className='text-[#94969F] text-[14px] mb-[10px] '>The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before</p>
                    </div>

                    {/* /////////////////////////////////////////////////////////// */}

                    <div className="mt-[30px]">
                        <h2 className='text-[#535766] text-[14px] font-[700]'>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h2>

                        <p className='text-[#94969F] text-[14px] mb-[20px] '>Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.</p>

                        <p className='text-[#94969F] text-[14px] mb-[10px] '>Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p>
                    </div>

                    {/* /////////////////////////////////////////////////////////// */}
                </div>
            </div>
        </div>

    );
}

export default Footer;
