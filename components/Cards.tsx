
import lo from '@/media/service.png'
import lo2 from '@/media/serviceW2.png'
import lo3 from '@/media/servb.png'
import lo4 from '@/media/digital.png'
import lo5 from '@/media/logobrand.png'
import lo6 from '@/media/servapp.png'

import { motion } from "framer-motion";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Image from "next/image";

import Link from 'next/link'

const services = [
    { image: lo, name: "Telegram Bot" },
    { image: lo2, name: "Full web sites" },
    { image: lo3, name: "Backend of site" },
    { image: lo4, name: "Marketing" },
    { image: lo5, name: "Creating logo & brand" },
    { image: lo6, name: "Mobile Apps" },

]

export function Cards() {


    return (
        <>

            {services.map((service, i) => (
                <motion.div key={i}
                initial={{ rotate: 360,scale: 0 }}
                animate={{  scale: 1, rotate:0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>

                    <Card className="mt-6 w-96"


                    >
                        <CardHeader color="blue-gray" className="relative h-56 flex justify-center items-center ">

                            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                <Image className='rounded-2xl max-w-xs'
                                    src={service.image}
                                    alt={service.name}
                                    width={200}
                                    height={0}
                                />
                                <div
                                    className="absolute bottom-0 rounded-2xl left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500  to-blue-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70 items-center flex justify-center font-bold">
                                    <Link href={'https://t.me/dilyorbek_asfandiyorov'} className='bg-black opacity-100 text-white px-4 py-2 rounded-lg' target='_blank'>
                                        Hire me
                                    </Link>
                                </div>
                            </div>

                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2 text-center font-bold ">
                                {service.name}
                            </Typography>
                        </CardBody>

                    </Card >
                </motion.div>
            ))
            }
        </>
    );
}
