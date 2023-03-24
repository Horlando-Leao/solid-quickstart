import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <div>
      <iframe rameborder="0" width="100%" height="800px" src="https://superlogica.cloud.looker.com/login/embed/%2Fembed%2Fdashboards%2F6?nonce=%22b67120985059c67422b317e40d6aa53d%22&time=1679687311&session_length=900&external_user_id=1002&permissions=%5B%22see_lookml_dashboards%22%2C+%22access_data%22%5D&models=%5B%22projeto_firenze%22%5D&group_ids=%5B5%2C+4%5D&external_group_id=%22awesome_engineers%22&user_attributes=%7B%22an_attribute_name%22%3A+%22my_attribute_value%22%2C+%22my_number_attribute%22%3A+%2242%22%7D&access_filters=%7B%22fake_model%22%3A+%7B%22id%22%3A+1%7D%7D&signature=YAaAM7KGp5iYzdFJ4%2BwlB8SJEsY%3D&first_name=%22Rogerio%22&last_name=%22Lima%22&force_logout_login=true&embed_domain=https%3A%2F%2Fmain--cute-chebakia-ef70e8.netlify.app"></iframe>
    </div>
  );
}
