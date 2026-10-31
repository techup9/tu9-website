import { Navigate, useParams } from 'react-router';
import PageTitle from '../components/PageTitle.jsx';
import PostInfo from '../components/PostInfo.jsx';
import { findPost } from '../data/posts.js';
import { usePage } from '../hooks/usePage.js';

const BODY_CLASS =
  'single single-post body_style_wide body_filled article_style_stretch top_panel_show top_panel_above sidebar_show sidebar_right sidebar_outer_hide';

export default function BlogPost() {
  const { slug } = useParams();
  const post = findPost(slug);
  usePage({ title: post?.title, bodyClass: BODY_CLASS });

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <PageTitle title={post.title} />
      <div className="page_content_wrap with_padding page_paddings_yes">
        <div className="content_wrap">
          <div className="content" style={{ width: '100%' }}>
            <section className="light_section no_padding">
              <div className="container-fluid">
                <article className="post_item post_item_single post">
                  <section className="post_featured">
                    <div className="post_thumb">
                      <a className="hover_icon hover_icon_view" href={post.image} title={post.title} target="_blank" rel="noreferrer">
                        <img alt={post.title} src={post.image} />
                      </a>
                    </div>
                  </section>
                  <h3 className="post_title entry-title">{post.title}</h3>
                  <PostInfo post={post} />
                  <section className="post_content">
                    {post.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    <div className="post_info post_info_bottom">
                      <span className="post_info_item post_info_tags">
                        {post.tags.map((tag, i) => (
                          <span key={tag}>
                            {i > 0 && ', '}
                            <a className="post_tag_link" href="#">{tag}</a>
                          </span>
                        ))}
                      </span>
                    </div>
                  </section>
                  <section className="post_author author vcard">
                    <div className="post_author_avatar">
                      <a href="#">
                        <img
                          src={post.author.avatar}
                          className="avatar photo"
                          width="75"
                          height="75"
                          alt={`Profile photo of ${post.author.name}`}
                        />
                      </a>
                    </div>
                    <h6 className="post_author_title">
                      About{' '}
                      <span>
                        <a href="#" className="fn">{post.author.name}</a>
                      </span>
                    </h6>
                    <div className="post_author_info">{post.author.bio}</div>
                  </section>
                  <section className="related_wrap related_wrap_empty"></section>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
