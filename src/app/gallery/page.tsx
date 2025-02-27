import cloudinary from 'cloudinary';
import GalleryGrid from '../components/GalleryGrid';

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to fetch images from Cloudinary folder
async function getImages() {
  try {
    const results = await cloudinary.v2.search
      .expression('folder:gallery/*')
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    return results.resources;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
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
            Collection photos from my gallery.
          </p>
        </header>

        <GalleryGrid images={images} />
      </div>
    </div>
  );
}