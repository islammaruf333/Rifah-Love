import { motion } from 'framer-motion';

export default function LoveMessage() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background hearts */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="bg-card rounded-3xl p-8 md:p-12 shadow-romantic border border-rose/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-5xl animate-heart-beat inline-block">💌</span>
          </motion.div>

          <motion.h2
            className="font-romantic text-4xl md:text-5xl text-center text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            আমার প্রিয়তমা রিফাহ'র প্রতি
          </motion.h2>

          <div className="space-y-6 font-elegant text-lg md:text-xl text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              "...এবং সে থামল, তার চোখের দিকে গভীরভাবে তাকিয়ে।"
              <span className="block mt-4 p-4 bg-rose-light/50 rounded-xl border border-rose/20 text-foreground font-romantic text-2xl">
                "আমি তোমাকে আরও বেশি ভালোবাসতে চাই (তাসনিয়া)"
              </span>
            </motion.p>

            <motion.p
              className="text-center p-6 bg-gradient-to-r from-transparent via-rose-light/30 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="font-romantic text-3xl md:text-4xl text-rose-dark">
                'সোনা আমার,সাদিকের ভালোবাসা'
              </span>
            </motion.p>

            <motion.div
              className="text-center pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="font-romantic text-2xl text-foreground mb-2">
                রিফাহকে খুব সুন্দর লাগছে। আমার ভালোবাসা।
              </p>
              <p className="font-romantic text-xl text-rose">
                আমার ভালোবাসা। আমার সুন্দর ভালোবাসা।
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-2xl">✦</span>
              <span className="font-elegant text-muted-foreground italic">চিরকাল তোমার</span>
              <span className="text-gold text-2xl">✦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
