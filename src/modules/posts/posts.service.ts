import { Injectable, Inject } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ResultDto } from 'src/dto/result.dto';
import { createQueryBuilder, Repository } from 'typeorm';
import { CreateNewPostDto } from './dto/posts.createnew.dto';
import { wp_posts } from './posts.entity';

@Injectable()
export class PostsService {
  [x: string]: any;
  constructor(
    @Inject('POSTS_REPOSITORY')
    private postsRepository: Repository<wp_posts>,
  ) {}

  /** Lista todos os posts */
  async findAll(): Promise<wp_posts[]> {
    return this.postsRepository.find();
    
  }

  async findAllPostFormat(): Promise<wp_posts[]> {
    return this.postsRepository.query(`select  users.user_nicename, post.ID, date_format(post.post_date, "%d/%m/%Y") as post_date, post.post_content, post.post_title, post.post_status  from wp_posts post inner join wp_users users on post.post_author = users.id where post.post_type='post';`);
    
  }

  async findTermsPost(): Promise<wp_posts[]> {
    return this.postsRepository.query(`select tr.object_id, tr.term_taxonomy_id, p.ID, t.name
    from wp_term_relationships  tr 
    inner join wp_posts p on p.ID=tr.object_id 
    inner join wp_terms t on t.term_id=tr.term_taxonomy_id
    where p.post_type='post'
    and p.post_status='publish'`);
    
  }

  async createNew(data: CreateNewPostDto): Promise<ResultDto>{
    let post = new wp_posts()
    /**test */

    var d = new Date();
    const id_uuid =  randomUUID();
    post.ID;
    post.post_author=6;
    post.comment_count=0;
    post.post_content='';
    post.post_password='';
    post.post_name='';
    post.post_time_type=Date();
    post.post_date = d;
    post.post_date_dmt = d;
    post.post_excerpt ='';
    post.post_status='publish';
    post.comment_status='open';
    post.ping_status ='open';
    post.to_ping='';
    post.pinged='';
    post.post_modified =d;
    post.post_modified_gmt =d;
    post.post_content_filtered='';
    post.guid='';
    post.menu_order=0;
    post.post_type='post';
    post.post_time_type;
    post.post_parent=0;

    post.post_title = data.post_title
    post.post_content  = data.post_description


    console.log('service:' + post)

    return this.postsRepository.save(post)
    .then((result)=>{
      return <ResultDto>{
        status: true,
        message:"Post cadastrado com sucesso"
      }
    })
    .catch((error)=>{
      console.log(error)
      return <ResultDto>{
        status: false,
        message:"Houve um erro ao cadastrar o post"
      }
    })
    
  }
}