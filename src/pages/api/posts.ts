import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export const GET: APIRoute = async ({ url }) => {
  try {
    const page = Number(url.searchParams.get('page')) || 1;
    const ITEMS_PER_PAGE = 6;
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    // Blog yazılarını al ve tarihe göre sırala
    const allPosts = await getCollection('blog');
    const sortedPosts = allPosts
      .sort((a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => 
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
      )
      .slice(start, end)
      .map((post: CollectionEntry<'blog'>) => ({
        title: post.data.title,
        slug: post.slug,
        excerpt: post.data.excerpt,
        date: post.data.date,
        image: post.data.image
      }));

    return new Response(JSON.stringify(sortedPosts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Blog yazıları yüklenirken hata oluştu' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 