import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-rose-light/50 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-romantic text-4xl md:text-5xl text-foreground mb-4">
            রিফাহ & সাদিক
          </h3>

          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.span
              className="text-3xl text-rose"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ♥
            </motion.span>
          </div>

          <p className="font-elegant text-lg text-muted-foreground mb-2">
            হাতে হাত রেখে, শেষ পর্যন্ত।
          </p>
          <p className="font-elegant text-muted-foreground italic">
            ~ AM
          </p>

          <div className="mt-8 pt-8 border-t border-rose/20">
            <p className="text-sm text-muted-foreground">
              Made with 💕 for the most beautiful love story
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
