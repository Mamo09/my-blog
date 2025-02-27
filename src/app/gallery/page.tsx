import { CldImage } from 'next-cloudinary';
import cloudinary from 'cloudinary';

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to fetch images from Cloudinary folder
async function getImages() {
  const results = await cloudinary.v2.search
    .expression('folder:portfolio/*')
    .sort_by('created_at', 'desc')
    .max_results(50)
    .execute();

  return results.resources;
}

export default async function Gallery() {
  const images = await getImages();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Gallery</h1>
          <p className="text-amber-800/70">
            Collection of my work and projects
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image: any) => (
            <div 
              key={image.public_id}
              className="group relative aspect-square bg-amber-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CldImage
                width="400"
                height="400"
                src={image.public_id}
                alt={image.filename || 'Gallery image'}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm font-medium truncate">
                    {image.filename}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}