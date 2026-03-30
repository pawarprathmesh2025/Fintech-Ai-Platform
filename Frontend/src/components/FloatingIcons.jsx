import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  PieChart,
  BarChart3,
  Wallet,
  CreditCard,
  Coins,
  TrendingDown
} from "lucide-react";

export default function FloatingIcons(){

const floatingIcons = [
{ Icon: DollarSign, delay:0, duration:4, x:20, y:30, color:"#10B981", bg:"#D1FAE5" },
{ Icon: TrendingUp, delay:0.5, duration:5, x:-30, y:40, color:"#06B6D4", bg:"#CFFAFE" },
{ Icon: PieChart, delay:1, duration:4.5, x:40, y:-20, color:"#14B8A6", bg:"#CCFBF1" },
{ Icon: BarChart3, delay:1.5, duration:5.5, x:-20, y:-30, color:"#3B82F6", bg:"#DBEAFE" },
{ Icon: Wallet, delay:2, duration:4, x:30, y:20, color:"#10B981", bg:"#D1FAE5" },
{ Icon: CreditCard, delay:2.5, duration:5, x:-40, y:-10, color:"#0EA5E9", bg:"#E0F2FE" },
{ Icon: Coins, delay:3, duration:4.5, x:10, y:-40, color:"#14B8A6", bg:"#CCFBF1" },
{ Icon: TrendingDown, delay:3.5, duration:5, x:-10, y:35, color:"#22D3EE", bg:"#CFFAFE" },
];

const bars = [80,120,100,140,110,160,130];

const coins = [
{ left:"18%", delay:0 },
{ left:"38%", delay:1 },
{ left:"58%", delay:2 },
{ left:"78%", delay:3 }
];

return (

<motion.div
className="hidden lg:flex items-center justify-center relative"
initial={{opacity:0,x:-50}}
animate={{opacity:1,x:0}}
transition={{duration:0.8}}
>

<div className="relative w-full h-[600px]">

{/* BAR GRAPH */}

{/* INTERACTIVE BAR GRAPH */}

<div className="absolute bottom-32 left-32 flex items-end gap-4 opacity-80">

{bars.map((height,index)=>(
<motion.div
key={index}
initial={{height:0}}
animate={{
height:[height*0.6,height,height*0.8,height],
}}
transition={{
duration:3,
delay:index*0.3,
repeat:Infinity,
ease:"easeInOut"
}}
whileHover={{
scale:1.15
}}
className="w-10 rounded-xl bg-gradient-to-t from-cyan-500 via-teal-400 to-emerald-400 shadow-xl"
/>
))}

</div>


{/* LINE GRAPH */}

<svg
width="420"
height="220"
viewBox="0 0 420 220"
className="absolute bottom-32 left-28 opacity-80"
>

<motion.path
d="M10 180 L70 140 L130 160 L190 120 L250 140 L310 90 L370 110"
fill="transparent"
stroke="#06b6d4"
strokeWidth="3"
strokeLinecap="round"
initial={{pathLength:0}}
animate={{pathLength:1}}
transition={{duration:2}}
/>

</svg>


{/* 4 DOLLAR CIRCLES */}

{coins.map((coin,index)=>(
<motion.div
key={index}
className="absolute"
style={{left:coin.left, top:"40%"}}
animate={{y:[-10,10,-10]}}
transition={{
duration:4,
delay:coin.delay,
repeat:Infinity
}}
>

<div className="w-14 h-14 rounded-full bg-white shadow-xl border-2 border-cyan-300 flex items-center justify-center">

<DollarSign size={24} className="text-cyan-600"/>

</div>

</motion.div>
))}


{/* ORIGINAL FLOATING ICONS */}

{floatingIcons.map((item,index)=>(
<motion.div
key={index}
className="absolute"
style={{left:`${50+item.x}%`,top:`${50+item.y}%`}}
initial={{opacity:0,scale:0}}
animate={{opacity:[0,1,1,0],scale:[0,1.3,1,0],y:[-30,30,-30]}}
transition={{
duration:item.duration,
delay:item.delay,
repeat:Infinity,
ease:"easeInOut"
}}
>

<div
className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-xl shadow-2xl border-2"
style={{backgroundColor:item.bg,borderColor:item.color}}
>

<item.Icon size={28} style={{color:item.color}}/>

</div>

</motion.div>
))}

</div>

</motion.div>

);
}