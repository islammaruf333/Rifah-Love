import { motion } from 'framer-motion';
import coupleImage from '@/assets/couple.png';

const quotes = [
  { text: "আমি তোমাকে ভালোবাসি রিফাহ", highlight: true },
  { text: "আমি তোমাকে ভালোবাসি তাসনিয়া", highlight: false },
  { text: "আমি তোমাকে ভালোবাসি অপু", highlight: false },
  { text: "আমি তোমাকে ভালোবাসি রিফাহ তাসনিয়া", highlight: true },
  { text: "আমি তোমাকে ভালোবাসি কিউট রিফাহ", highlight: true },
  { text: "তুমি আমার ভালোবাসা", highlight: false },
];

export default function LoveQuotes() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-romantic text-5xl md:text-6xl text-foreground mb-4">
            ভালোবাসার কথা
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose" />
            <span className="text-rose">✿</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Couple Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-romantic">
              <img
                src={coupleImage}
                alt="Rifah and Sadik"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 text-4xl animate-float">💕</div>
            <div className="absolute -bottom-4 -left-4 text-3xl animate-float-slow">🌸</div>
          </motion.div>

          {/* Quotes */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-2xl font-romantic text-2xl md:text-3xl ${quote.highlight
                  ? 'bg-rose-light text-rose-dark border border-rose/30'
                  : 'bg-card text-foreground border border-border'
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                {quote.highlight && <span className="mr-2">♥</span>}
                {quote.text}
              </motion.div>
            ))}

            <motion.p
              className="text-right font-elegant text-xl text-muted-foreground italic mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              ~ সাদিকের ভালোবাসা হতে
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
