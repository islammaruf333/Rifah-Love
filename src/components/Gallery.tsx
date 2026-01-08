import { motion } from 'framer-motion';
import { useState } from 'react';
import loveLetter from '@/assets/love-letter.png';
import flowers from '@/assets/flowers.png';
import heartsSky from '@/assets/hearts-sky.png';
import cuteNote from '@/assets/cute-note.png';

const images = [
  { src: heartsSky, alt: 'Rifah & Sadik in the clouds', caption: 'আমাদের স্বপ্ন' },
  { src: flowers, alt: 'I love you Rifah Sona', caption: 'আমার সুন্দর ফুল' },
  { src: loveLetter, alt: 'Love letter in garden', caption: 'আমার হৃদয়ের কথা' },
  { src: cuteNote, alt: 'Cute love note', caption: 'তোমার আলিঙ্গন এবং ভালোবাসা' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-rose-light/30 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-romantic text-5xl md:text-6xl text-foreground mb-4">
            আমাদের স্মৃতি
          </h2>
          <p className="font-elegant text-xl text-muted-foreground">
            সময়ের ফ্রেমে বন্দী মুহূর্ত, চিরকালের সম্পদ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-romantic">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-romantic text-2xl text-primary-foreground">
                    {image.caption}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose rounded-full flex items-center justify-center text-primary-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                ♥
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 25 }}
          />
          <button
            className="absolute top-6 right-6 text-primary-foreground text-4xl hover:scale-110 transition-transform"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </motion.div>
      )}
    </section>
  );
}
