package com.zosh.controller;

import com.zosh.modal.Chat;
import com.zosh.modal.Message;
import com.zosh.modal.User;
import com.zosh.request.CreateMessageRequest;
import com.zosh.service.MessageService;
import com.zosh.service.ProjectService;
import com.zosh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;


    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest req) throws Exception{

        User user = userService.findUserById(req.getSenderId());

        Chat chats = projectService.getProjectById(req.getProjectId()).getChat();
        if(chats == null) throw new Exception("chats not found");

        Message sentMessage = messageService.sendMessage(req.getSenderId(), req.getProjectId(), req.getContent());

        return ResponseEntity.ok(sentMessage);

    }

    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessagesByChatId(@PathVariable Long projectId) throws Exception{

        List<Message> messages = messageService.getMessageByProjectId(projectId);
        return ResponseEntity.ok(messages);

    }



}
