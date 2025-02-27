'use client';

import { CldImage } from 'next-cloudinary';

interface CloudinaryImage {
  public_id: string;
  filename: string;
}

export default function GalleryGrid({ images }: { images: CloudinaryImage[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {images.map((image) => (
        <div 
          key={image.public_id}
          className="group relative bg-white/50 rounded-xl border border-amber-100 overflow-hidden hover:shadow-lg hover:shadow-amber-100/20 transition-all duration-300"
        >
          <div className="aspect-square w-full flex items-center justify-center p-4">
            <CldImage
              width="800"
              height="800"
              src={image.public_id}
              alt={image.filename || 'Gallery image'}
              className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-102"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}