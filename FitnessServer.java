
import com.sun.net.httpserver.HttpServer;
import java.net.InetSocketAddress;

public class FitnessServer {

    public static void main(String[] args) throws Exception {

        HttpServer server =
            HttpServer.create(
                new InetSocketAddress(8080), 0);

        System.out.println(
            "Fitness Trainer Server Started!");

        server.start();
    }
}

