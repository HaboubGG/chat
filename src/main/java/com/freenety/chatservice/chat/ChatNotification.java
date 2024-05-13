package com.freenety.chatservice.chat;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document
public class ChatNotification {
    @Id
    private String id;
    private String senderId;
    private String recipientId;
    private String content;
}
